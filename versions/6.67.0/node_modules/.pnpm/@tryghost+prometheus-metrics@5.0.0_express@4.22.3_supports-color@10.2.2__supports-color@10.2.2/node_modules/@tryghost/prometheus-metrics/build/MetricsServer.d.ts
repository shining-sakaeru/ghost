import express from 'express';
import stoppable from 'stoppable';
type ServerConfig = {
    host: string;
    port: number;
};
type CreateApp = () => express.Application;
type CreateStoppableServer = (server: ReturnType<express.Application['listen']>, grace?: number) => stoppable.StoppableServer;
export declare class MetricsServer {
    private serverConfig;
    private handler;
    private app;
    private httpServer;
    private isShuttingDown;
    private createApp;
    private createStoppableServer;
    constructor({ serverConfig, handler, createApp, createStoppableServer, }: {
        serverConfig: ServerConfig;
        handler: express.Handler;
        createApp?: CreateApp;
        createStoppableServer?: CreateStoppableServer;
    });
    start(): Promise<{
        app: express.Application;
        httpServer: stoppable.StoppableServer;
    }>;
    stop(): Promise<void>;
    shutdown(): Promise<void>;
}
export {};
