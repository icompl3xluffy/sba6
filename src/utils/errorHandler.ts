export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}


 export function handleError((error:______) => {
      if (error instanceof NetworkError) {
        console.error("Network problem:", error.message);
      } else if (error instanceof DataError) {
        console.error("Data problem:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
    .finally(() => {
      console.log("All attempted");
    });

