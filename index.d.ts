import Acr from 'acr';

declare module 'egg' {
    interface Application {
        acr: Acr;
    }

    interface Context {
        validate(schema: any, data?: any): Promise<any>;
    }
}
