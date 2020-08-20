import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.styles.scss";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
