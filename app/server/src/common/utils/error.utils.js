const handleError = (error, res) => {
  res.status(error.status || 500).json({
    error: {
      ...error,
      message:
        error.message?.message || error.message || 'Something went wrong.',
    },
  })
}

module.exports = handleError
