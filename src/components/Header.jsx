import chefClaudeLogo from "../assets/chef_claude.png"

export default function Header() {
  return (
    <header className='header'>
      <a className="header-container" href="../../index.html">
        <img src={chefClaudeLogo} alt="chef claude icon" />
        <h1>Chef Claude</h1>
      </a>
    </header>
  )
}