import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('sayHello', () => {
    it('should return the correct message', () => {
      const result = { message: 'Hello quys, John!' };
      jest.spyOn(appService, 'sayHello').mockImplementation(() => result);

      expect(appController.sayHello({ name: 'John' })).toEqual(result);
    });
  });

  describe('sayHi', () => {
    it('should return the correct message', () => {
      const result = { message: 'Hello quys, Jane' };
      jest.spyOn(appService, 'sayHi').mockImplementation(() => result);

      expect(appController.sayHi({ name: 'Jane' })).toEqual(result);
    });
  });
});
