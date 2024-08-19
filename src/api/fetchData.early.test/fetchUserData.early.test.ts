
// Unit tests for: fetchUserData

import axios from 'axios';

import { fetchUserData } from '../fetchData';


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchUserData() fetchUserData method', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Happy Path', () => {
    it('should return user data when the API call is successful', async () => {
      // Arrange: Set up the mock response
      const mockUserData = [{ id: 1, name: 'John Doe' }];
      mockedAxios.get.mockResolvedValueOnce({ data: mockUserData });

      // Act: Call the function
      const result = await fetchUserData();

      // Assert: Verify the result
      expect(result).toEqual(mockUserData);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com//users');
    });
  });

  describe('Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      // Arrange: Set up the mock to reject with an error
      const mockError = new Error('Network Error');
      mockedAxios.get.mockRejectedValueOnce(mockError);

      // Act: Call the function
      const result = await fetchUserData();

      // Assert: Verify the result
      expect(result).toBeUndefined();
      expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com//users');
    });

    it('should handle empty response data', async () => {
      // Arrange: Set up the mock response with empty data
      mockedAxios.get.mockResolvedValueOnce({ data: [] });

      // Act: Call the function
      const result = await fetchUserData();

      // Assert: Verify the result
      expect(result).toEqual([]);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com//users');
    });
  });
});

// End of unit tests for: fetchUserData
