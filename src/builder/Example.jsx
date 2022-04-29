export default function Example({ text }) {
  return (
    <div>
      <p>This is an example component used within the CMS design system</p>
      <p>{text}</p>
    </div>
  );
}

Example.config = {
  name: 'Example',
  inputs: [
    {
      name: 'text',
      type: 'text'
    }
  ]
};