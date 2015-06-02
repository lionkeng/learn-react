var Button = ReactBootstrap.Button;
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var icon = (
    <span class="logo">
        <a href="/">
          <img src="assets/images/clientlogo.jpg" />
        </a>
    </span>
);

var App = React.createClass({
  render: function() {
    var message = "Interior Design App";
    return (<div>
              <Navbar brand={icon} defaultNavExpanded={false} toggleNavKey={0}>
                <Nav right eventKey={0}>
                  <NavItem eventKey={1} href='#'>Link</NavItem>
                  <NavItem eventKey={2} href='#'>Link</NavItem>
                  <DropdownButton eventKey={3} title='Dropdown'>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3'>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                  </DropdownButton>
                </Nav>
              </Navbar>
              <Button bsStyle='primary'>Primary</Button>
              <p>{message}</p>
              <p>Hello</p>
            </div>);
  }
});

// render the containing app
React.render(
  <App client="upperview" />,
  document.getElementById('container')
);
