import io from 'socket.io-client';

type CommonHandler = (...args: any[]) => void;

interface InitWebSocketProps {
  path: string;
  handleConnect: CommonHandler;
  handleMessage: CommonHandler;
}

// const socket = io('http://your-nestjs-backend-url:port');
export const initWebSocket = ({
  path,
  handleConnect,
  handleMessage,
}: InitWebSocketProps) => {
  const socket = io(path);

  socket.on('connect', () => {
    handleConnect();
  });

  socket.on('server-send-message', (response: any) => {
    handleMessage(response);
  });

  socket.on('disconnect', () => {
    console.log('disconnected！');
  });

  return socket;
};