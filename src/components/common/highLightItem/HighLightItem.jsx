import * as S from "./style";
const HightLightItem = ({ item, query }) => {
  return item.includes(query) ? (
    <>
      {item.split(query)[0]}
      <S.HightLight>{query}</S.HightLight>
      {item.split(query)[1]}
    </>
  ) : (
    <>{item}</>
  );
};

export default HightLightItem;
