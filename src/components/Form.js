// Form.js

const Form = ({ setCity, getWeather, city }) => {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
