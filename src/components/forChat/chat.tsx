import { Card } from 'antd';

export type ChatPropsType = {
  text: string;
  by: 'assistant' | 'user';
};

const Chat: React.FC<ChatPropsType> = ({ text, by }) => {
  const className: string =
    by === 'assistant' ? 'bg-white text-gray-700' : 'text-white bg-gray-700';

  return (
    <Card
      className="my-chat"
      style={{
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        border: '1px solid gray',
        padding: 0,
        borderRadius: 5,
        backgroundColor: `${by === 'assistant' ? 'white' : '#374151'}`,
        color: `${by === 'user' ? 'white' : '#374151'}`,
      }}
      styles={{
        body: {
          margin: 0,
        },
      }}
      classNames={{
        body: `${className}`,
      }}
      // dangerouslySetInnerHTML={{ __html: text }}
    >
      <div className={`${className}`} dangerouslySetInnerHTML={{ __html: text }} />
      {/* <p>{text}</p> */}
    </Card>
  );
};

export default Chat;
