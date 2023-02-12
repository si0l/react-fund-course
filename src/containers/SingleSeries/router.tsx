import SingleSeries from ".";
import { useParams } from 'react-router-dom';

const SingleSeriesRouter = (props: any) => {

  const params = useParams();//url params

  return (
    <SingleSeries
      {...props}
      params={params}
    />
  );

}

export default SingleSeriesRouter;