const styles = {
  log: 'color: red; background-color: green; font-size: 24px',
  debug: 'color: grey; background-color: yellow; font-size: 24px',
  warn: 'color: orange; background-color: purple; font-size: 24px',
  error: 'color: red; background-color: blue; font-size: 24px',
  info: 'color: white; background-color: black; font-size: 24px',
};

export default {
  log(values) {
    return console.log(
      '%c%o',
      styles.log,
      values
    );
  },

  debug(values) {
    return console.debug(
      '%c%o',
      styles.debug,
      values
    );
  },

  warn(values) {
    return console.warn(
      '%c%o',
      styles.warn,
      values
    );
  },

  error(values) {
    return console.error(
      '%c%o',
      styles.error,
      values
    );
  },

  info(values) {
    return console.info(
      '%c%o',
      styles.info,
      values
    );
  }
}
