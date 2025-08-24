import { Button, Drawer, Flex, List, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import ChatInput from './chatInput';
import { useMutation } from '@tanstack/react-query';
import { chat, chatItem } from '@/api/chat/chat';
import { QUERY_KEYS } from '@/constants';
import Chat from './chat';
import { COLORS } from '@/Colors';
import { useTheme } from '@/contexts/themeContext';
import { MdCreate } from 'react-icons/md';

type chatDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const { Title, Text } = Typography;

const ChatDrawer: React.FC<chatDrawerProps> = ({ open, onClose }) => {
  // const [messages, setMessages] = useState<string[] | undefined>([
  //   '<h2>Hello Eleazar, </h2>\n<p>Your transport expenditure is as follows:</p>\n<ul>\n<li>Uber Home: $20.55 on April 27, 2025</li>\n<li>Uber to the mall: $30.50 on May 10, 2025</li>\n</ul>\n<p>Total transport expenditure: $51.05</p>',
  // ]);
  const [messages, setMessages] = useState<chatItem[] | undefined>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const { mutate, isPending } = useMutation({
    mutationFn: chat,
    mutationKey: QUERY_KEYS.messages,
    onSuccess: (data) => {
      console.log(data);
      // setData([variables.message]);
      setMessages((prevMessages) => [...(prevMessages as chatItem[]), data.response]);
    },
    onError: (error) => {
      console.log('Chat Error: ', error);
      setMessages((prevMessages) => [
        ...(prevMessages as chatItem[]),
        {
          role: 'assistant',
          content:
            "<h2><strong>I don't understand what you mean, could you rephrase?</strong></h2>",
        },
      ]);
    },
  });

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current?.scrollHeight;
    }
  }, [messages]);

  const addUserRequestToMessages = (request: string) => {
    setMessages((prevMessages) => [
      ...(prevMessages as chatItem[]),
      { role: 'user', content: `<p>${request}</p>` },
    ]);
  };

  const newChat = () => {
    setMessages([]);
  };

  return (
    <>
      <Drawer
        // title="Chat with your expenses"
        title={
          <Flex style={{ justifyContent: 'space-between' }}>
            <Title style={{ color: COLORS[theme].textHeading }} level={5}>
              Chat with your expense
            </Title>
            <Button
              onClick={newChat}
              title="Start a new chat"
              styles={{
                icon: {
                  color: COLORS[theme].textBody,
                },
              }}
              style={{
                backgroundColor: COLORS[theme].background,
              }}
              icon={<MdCreate />}
            />
          </Flex>
        }
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        height={500} // Increase height to see more messages
        style={{ backgroundColor: COLORS[theme].background, color: COLORS[theme].textHeading }}
        styles={{
          body: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px 10px',
          },
        }}
        // classNames={{
        //   body: `flex flex-row justify-between p-0`,
        // }}
        // className="flex flex-row between"
      >
        <div ref={listRef} className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          <List
            className="flex-1"
            dataSource={messages}
            renderItem={(item, index) => <Chat by={item.role} text={item.content} key={index} />}
          >
            {isPending && (
              <List.Item>
                <Text
                  style={{ color: '#ffffff', display: 'flex', flexDirection: 'row', gap: '5px' }}
                  // className="text-white"
                >
                  Thinking...<div className="thinking"></div>
                </Text>
              </List.Item>
            )}
          </List>
        </div>
        <div className="sticky bottom-0 bg-transparent p-o">
          {/* <Divider orientation="left" /> */}
          <ChatInput
            disabled={isPending}
            onSubmit={mutate}
            messages={messages}
            addRequestToMessages={addUserRequestToMessages}
          />
        </div>
      </Drawer>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      {/* <Drawer
        title="Chat with your expenses"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        height={100}
      > */}
      {/* <> */}
      {/* <Divider orientation="left">Chat</Divider> */}
      {/* <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            className="h-9/12 overflow-y-auto"
            // bordered

            dataSource={messages}
            renderItem={(item, index) => (
              <Chat by={item.role} text={item.content} key={index} />
              // <List.Item>
              //   <Typography.Text mark>[ITEM]</Typography.Text> {item}
              // </List.Item>
            )}
            ref={listRef}
            
          /> */}
      {/* <Divider orientation="left" /> */}
      {/* <ChatInput
            disabled={isPending}
            onSubmit={mutate}
            messages={messages}
            addRequestToMessages={addUserRequestToMessages}
          /> */}
      {/* </> */}
      {/* </Drawer> */}
    </>
  );
};

export default ChatDrawer;
