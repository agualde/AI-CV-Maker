import React, {Fragment} from "react"
import InlineEdit from 'react-edit-inplace';


const Post = ({ header, sub_header, description }) => {

  const dataChanged = (data) => {
    debugger
  };

  return( <Fragment>
      <div className="post">
          <h2>
            <InlineEdit
                text={header}
                staticElement="h2"
                style={{  fontSize: '1.5rem',
                whiteSpace: 'nowrap'}}
                activeClassName="editing form-control"
                paramName="message"
                change={dataChanged}
                validate={() => true}
                editMode={false}
                placeholder={'Tell us more!'}/>
          </h2>

          <p>
            <InlineEdit
                        text={sub_header}
                        activeClassName="editing form-control"
                        paramName="message"
                        change={dataChanged}
                        validate={() => true}
                        editMode={false}
                        placeholder={'Tell us more!'} />
          </p>

        <InlineEdit
                    text={description}
                    activeClassName="editing form-control"
                    paramName="message"
                    change={dataChanged}
                    editingElement="textarea"
                    validate={() => true}
                    editMode={false}
                    placeholder={'Tell us more!'} />
      </div>
  </Fragment>
  )}

export default Post