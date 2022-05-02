import { RoundLoader } from './Loading.styled';

export const Loading = () => {
  return (
    <RoundLoader>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </RoundLoader>
  );
};
