
class SiteHeader extends React.Component {
  render(){
    const { title } = this.props;
    return (
      <div className="SiteHeader">
        <h1 className="SiteHeader-title">{title}</h1>
      </div>
    )
  }
}

export default SiteHeader;