// Type File // 

```html

// Define an interface to describe the shape of the user data we expect from the API.
// This provides strong typing for the fetched data.
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// An async function to fetch a user by their ID from the API.
// The 'async' keyword allows us to use 'await' inside the function.
// It returns a Promise that resolves to a User object.
async function fetchUserById(userId: number): Promise<User> {
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

  try {
    // 'await' pauses the function until the fetch Promise resolves.
    // 'fetch' makes the network request.
    const response = await fetch(apiUrl);

    // Check if the HTTP response status is OK (e.g., 200).
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 'await' pauses again until the JSON body is parsed.
    // The result is typed as 'User' to ensure type safety.
    const user: User = await response.json();
    return user;

  } catch (error) {
    console.error("Failed to fetch user:", error);
    // Re-throw the error to be handled by the caller.
    throw error;
  }
}

// --- Using the async function ---
// We create another async function to call 'fetchUserById' so we can use 'await'.
async function main() {
  console.log("Fetching user data...");
  try {
    // Call our async function and wait for the result. Let's get user with ID 1.
    const user = await fetchUserById(1);

    console.log("✅ User data received:");
    console.log(`  Name: ${user.name}`);
    console.log(`  Email: ${user.email}`);
    console.log(`  Website: ${user.website}`);
  } catch (error) {
    console.error("💥 An error occurred in the main function.");
  }
}

// Start the application.
main();

/*
Expected Output:

Fetching user data...
✅ User data received:
  Name: Leanne Graham
  Email: Sincere@april.biz
  Website: hildegard.org
*/
