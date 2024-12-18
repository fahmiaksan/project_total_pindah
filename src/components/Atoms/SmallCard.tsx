interface Props {
  data: {
    title: string;
    size: string;
    price: string;
    background: string;
  }[];
}
const SmallCard: React.FC<Props> = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className="h-[275px] py-6 rounded-xl">
      <p className="text-center py-3 rounded-t-2xl border border-black">{item.title}</p>
      <div className={`text-center ${index === 0 ? 'text-black' : 'text-white'} space-y-8 py-6 rounded-b-3xl ${item.background}`}>
        <p>{item.size}</p>
        <p>Rp. {item.price} /pcs</p>
      </div>
    </div>
  ));
};

export default SmallCard;
