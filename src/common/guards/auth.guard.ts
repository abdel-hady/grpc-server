import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    context.switchToRpc().getContext(); // Extract gRPC request context
    const { name } = context.switchToRpc().getData(); // Get data from request
    // Implement authorization logic here (e.g., restrict access by name)
    return name !== 'restricted'; // Example: Block if name is 'restricted'
  }
}
