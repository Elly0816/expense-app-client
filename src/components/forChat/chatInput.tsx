/**
 * Module: src/components/forChat/chatInput.tsx
 * Purpose: Chat input box used within the chat drawer; sends queries to the chat API.
 * Exports: default ChatInput component.
 */
import React, { useState } from 'react';
import { Button, Flex, Input } from 'antd';
import { BiArrowToRight } from 'react-icons/bi';
import { chatItem } from '@/api/chat/chat';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';
import { useSearchParams } from 'next/navigation';
import { searchParamsType } from '@/app/category/[title]/page';

const { TextArea } = Input;

export type ChatInputPropsType = {
  onSubmit: ({ message }: { message: string }) => void;
  disabled: boolean;
  messages: chatItem[] | undefined;
  addRequestToMessages: (request: string) => void;
};

const ChatInput: React.FC<ChatInputPropsType> = ({
  onSubmit,
  disabled,
  addRequestToMessages,
  messages,
}) => {
  const [entry, setEntry] = useState<string>('');
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') as searchParamsType['name'];

  const handleChange = (item: string) => {
    setEntry(item);
  };

  return (
    <>
      <Flex gap={'middle'}>
        <TextArea
          value={entry}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter your query here"
          autoSize
          className="bottom-0 text-area-placeholder"
          styles={{
            textarea: {
              backgroundColor: COLORS[theme].cardBackground,
              color: COLORS[theme].textBody,
            },
          }}
        />
        <Button
          disabled={disabled || entry.length === 0}
          onClick={() => {
            onSubmit({
              message: [
                JSON.stringify(messages as chatItem[]),
                `${entry}${
                  name
                    ? ', if the category has NOT been mentioned earlier, use ' +
                      name +
                      ' as the category. Otherwise ask the user for the category.'
                    : ''
                }`,
              ].join(', '),
            });
            addRequestToMessages(entry);
            setEntry('');
          }}
          type="primary"
          shape="circle"
          icon={<BiArrowToRight />}
          size={'middle'}
        />
      </Flex>
    </>
  );
};

export default ChatInput;
