import  {Request, Response, NextFunction} from 'express';

export const loggerMiddleware =(Req: Request, Res:Response, next: NextFunction) =>{
    console.log(`[${new Date().toISOString()}] ${Req.method} ${Req.url}`);
    next()

};