import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('sayHello', () => {
    it('should return the correct message', () => {
      const name = 'John';
      expect(appService.sayHello(name)).toEqual({
        message: `Hello quys, John!`,
      });
    });
  });

  describe('sayHi', () => {
    it('should return the correct message', () => {
      const name = 'Jane';
      expect(appService.sayHi(name)).toEqual({ message: `Hello quys, Jane` });
    });
  });
});
