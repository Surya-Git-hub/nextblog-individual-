import Output from 'editorjs-react-renderer';

const BlogDetail = (props) => {
  const { data, error } = props;

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>{data.title}</h1>

      <div style={{ marginBottom: '3rem' }}>{data.description}</div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Output data={data.blogData} />
      </div>
    </div>
  );
};



export async function getServerSideProps({ query }) {
  const { slug } = query;

  //make an ajax call to get your blog

  return {
    props: {
      data: {
        //return your blog data saved through editor.js
      },
    },
  };
}

export default BlogDetail;