import React from "react";

interface Props {
  titleHeader: string;
  contentHeader?: string | React.ReactNode;
  content: string | React.ReactNode;
  background?: string;
  padding?: string;
  spacing?: string
}
export default function Layout(props: Props) {

  const { titleHeader, padding, contentHeader, content, background, spacing } = props
  return (
    <main className={`px-14 my-20 ${spacing ? spacing : 'space-y-12'}`}>
      <div className={`${background ? "space-y-0" : "space-y-10"}`}>
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-black lg:tracking-widest">
          {titleHeader}
        </p>
        <div className={`${background ? background : 'bg-[#F2EE6F]'} rounded-tr-2xl rounded-bl-2xl ${padding ? padding : 'px-11 py-9'}`}>
          <div className="leading-9 tracking-widest">
            {contentHeader}
          </div>
        </div>
      </div>
      <div>
        {
          content
        }
      </div>
    </main>
  )
};
