import React, { Component } from "react";
import PropTypes from "prop-types";

interface Props {
  imgLink: string;
  title: string;
  description: string;
}

export default class DescriptionItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static propTypes = {
    imgLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    const { imgLink, title, description } = this.props;
    return (
      <div className="col-sm-6">
        <img className="center-block" src={imgLink} />
        <h3 className="h5">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
