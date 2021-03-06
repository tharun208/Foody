import dotenv from 'dotenv';

dotenv.config();

const ENV = process.env;
function must(envName: string): string {
  if (ENV[envName]) return ENV[envName] as string;
  else throw new Error(`environment.variable.missing ${envName}`);
}
export default {
  isDev: ENV.NODE_ENV === 'development',
  port: parseInt(ENV.PORT || '3000', 10),
  secretKey: ENV.privateKey || 'test@123',
};
