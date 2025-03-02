// Implement generic type
type GiftWrapper = {
  present: unknown;
  from: unknown;
  to: unknown;
};

// Test case:
type TestType = GiftWrapper<"Car", "Santa", "Trash">;

// Expected output:
type ExpectedType = {
  present: "Car";
  from: "Santa";
  to: "Trash";
};
