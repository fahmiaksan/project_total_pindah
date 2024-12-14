interface Props {
  content_1: string
  content_2: string
}

export default function Content(props: Props) {
  const { content_1, content_2 } = props
  return (
    <>
      <p className="mt-10 leading-8">{content_1}</p>
      <br />
      <p>{content_2}</p>
    </>
  )
};
