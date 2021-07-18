import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 18:00PM"
          content="Good post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 13:00PM"
          content="Simple and Easy to use!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="ui container comments">
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" src={faker.image.avatar()} />
//         </a>
//         <div className="content">
//           <a href="/" className="author">
//             Sam
//           </a>
//           <div className="metadata">
//             <span classNAme="date">Today at 6:00pm</span>
//           </div>
//           <div className="text">Nice blog post!</div>
//         </div>
//       </div>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.querySelector('#root'));
