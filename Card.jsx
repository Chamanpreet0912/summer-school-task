function Card({ title, content }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f1f1f1'
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;