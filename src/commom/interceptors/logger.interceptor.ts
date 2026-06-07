import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor{

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

    console.log("interceptando a requisição")

    return next.handle().pipe();

  }
}