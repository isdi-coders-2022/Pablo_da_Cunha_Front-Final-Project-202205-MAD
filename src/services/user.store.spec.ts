import { user } from '@userfront/core';
import { iUser } from '../interfaces/iUser';
import { User } from '../models/user.model';

import { UserHttpStore } from './user.store';



  describe('When i use the method getUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '5', 'Owner');
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      const result = await new UserHttpStore().getUserByToken();

      expect(fetch).toBeCalled();
      expect(result.name).toBe('test');
    });
  });

  describe('When i use the method registerUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '5', 'Owner');
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      const result = await new UserHttpStore().registerUser(user);

      expect(fetch).toBeCalled();
      expect(result.name).toBe('test');
    });
  });

  describe('When i use the method loginUser', () => {
    test('Then should be render', async () => {
      const user = { name: 'test', password: '1234', email: '' , role: '' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      await new UserHttpStore().loginUser(user);

      expect(fetch).toBeCalled();
      expect(user.name).toBe('test');
    });
  });
  describe('When i use the method getUserByToken is called', () => {
    test('Then should return a  user with token', async () => {
      const user = { name: 'test', password: '1234' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      await new UserHttpStore().getUserByToken();

      expect(fetch).toBeCalled();
      expect(user.name).toBe('test');
    });
  });

  describe('When i use the method updateUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '5', 'Owner');
      const modifyUser = { ...user, name: 'pepe' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(modifyUser),
      });
      const result = await new UserHttpStore().updateUser(user._id, modifyUser);

      expect(fetch).toBeCalled();
      expect(result.name).toBe('pepe');
    });
  });

  describe('When i use the method deleteUser', () => {
    test('Then should be render', async () => {
      const user = new User('test', 'test', 'test@test.com', [], 'Owner', '5' );

      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(user),
      });
      const result = await new UserHttpStore().deleteUser(user._id);

      expect(fetch).toBeCalled();
      expect(result).toBe(user);
    });
  });
  describe('When i use the method addFavBrew', () => {
    test('Then should be get token is called', async () => {
      const user = new User('test', 'test', 'test@test.com', [], '5', 'Owner');
      const modifyUser = { ...user, name: 'pepe' };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(modifyUser),
      });

      const result = await new UserHttpStore().addFavBrew('');

      expect(fetch).toBeCalled();
      expect(result).toBe(modifyUser);
    });
  });
  
