describe('Example Test Suite', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should validate configuration', () => {
    const config = require('../backend/config/logging');
    expect(config).toBeDefined();
    expect(config.alerts).toBeDefined();
  });
});