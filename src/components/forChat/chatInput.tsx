import React, { useState } from 'react';
import { Button, Flex, Input } from 'antd';
import { BiArrowToRight } from 'react-icons/bi';
import { chatItem } from '@/api/chat/chat';
import { useTheme } from '@/contexts/themeContext';
import { COLORS } from '@/Colors';

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
  const [value, setValue] = useState<string>('');
  const { theme } = useTheme();

  const handleChange = (item: string) => {
    setValue(item);
  };

  return (
    <>
      <Flex gap={'middle'}>
        <TextArea
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Autosize height based on content lines"
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
          disabled={disabled}
          onClick={() => {
            onSubmit({ message: [JSON.stringify(messages as chatItem[]), value].join(', ') });
            addRequestToMessages(value);
            setValue('');
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
