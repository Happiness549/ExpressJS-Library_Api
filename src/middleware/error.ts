import { Request, Response,NextFunction } from "express"


export const notFoundHandler =(req:Request, res:Response, next: NextFunction) =>{
    res.status(404).json({
    error: "Not Found",
    message: `The requested URL ${req.originalUrl} was not found`
    })

}

export const wrongMethod =(req:Request, res:Response, next: NextFunction) =>{
    res.status(405).json({
    error: "Method not allowed ",
    
    })
    
}

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;

    res.status(status).json({
        error: error.message || "Internal Server Error"
    });
};