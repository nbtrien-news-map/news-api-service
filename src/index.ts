import dotenv from 'dotenv';
import { createServer } from 'http';
import moduleAlias from 'module-alias';
moduleAlias.addAliases({
    '~': `${__dirname}/`,
});
import 'module-alias/register';
import 'reflect-metadata';
import { createApp } from './app';
import { connectDB } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectDB();
    const app = createApp();
    const server = createServer(app);
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
