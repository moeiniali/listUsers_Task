
// Unit tests for: fetchUserData

import axios from 'axios';

import { fetchUserData } from '../fetchData';


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchUserData() fetchUserData method', () => {
  // Happy Path
  describe('Happy Path', () => {
    it('should return user data when the API call is successful', async () => {
      // Arrange: Set up the mock response
      const mockData = [{ id: 1, name: 'John Doe' }];
      mockedAxios.get.mockResolvedValue({ data: mockData });

      // Act: Call the function
      const result = await fetchUserData();

      // Assert: Verify the result
      expect(result).toEqual(mockData);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com//users');
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      // Arrange: Set up the mock to reject with an error
      const errorMessage = 'Network Error';
      mockedAxios.get.mockRejectedValue(new Error(errorMessage));

      // Act: Call the function
      const result = await fetchUserData();

      // Assert: Verify the result
      expect(result).toBeUndefined();
      expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com//users');
    });

    it('should handle empty response data', async () => {
      // Arrange: Set up the mock response with empty data
      mockedAxios.get.mockResolvedValue({ data: [] });

      // Act: Call the function
      const result = await fetchUserData();

      // Assert: Verify the result
      expect(result).toEqual([]);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com//users');
    });
  });
});

// End of unit tests for: fetchUserData
