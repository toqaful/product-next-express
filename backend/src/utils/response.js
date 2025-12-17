module.exports = {
  success(message, data = null) {
    return {
      status: 'success',
      message,
      data
    };
  },

  error(message, data = null) {
    return {
      status: 'error',
      message,
      data
    };
  }
};
