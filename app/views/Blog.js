import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Basic from '../layouts/Main';

const Blog = () => (
<Basic> 

<Helmet title="Oladelemi's blog"/>
    <h1 > Welcome to my Blog!</h1>
    <p>This blog is dedicated to the few times i am interested in writing about accomplishments/events
    i partake in or just sometimes some how-tos</p>



</Basic>
    

);

export default Blog;