import React from 'react';

import './Header.css';

export default function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__top'>
					<div className='header__about'>
						<button className='burger-btn'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/4543/4543046.png'
								alt='burger icon'
							/>
						</button>
						<a href='./' className='logo-link'>
							<img
								src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo.svg'
								alt='logo'
								className='logo'
							/>
						</a>
						<ul className='header__toplist'>
							<li className='header__topitem'>
								<a href='#' className='header__topitemlink'>
									Home
								</a>
								<div className='menu'>
									<span className='menu__item second-item'>Home2</span>
									<br />
									<span className='menu__item'>Home3</span>
									<br />
									<span className='menu__item'>Home4</span>
								</div>
							</li>
							<li className='header__topitem'>
								<a href='#' className='header__topitemlink'>
									Politics
								</a>
								<div className='menu'>
									<span className='menu__item second-item'>Home2</span>
									<br />
									<span className='menu__item'>Home3</span>
									<br />
									<span className='menu__item'>Home4</span>
								</div>
							</li>
							<li className='header__topitem'>
								<a href='#' className='header__topitemlink'>
									Technology
								</a>
								<div className='menu'>
									<span className='menu__item second-item'>Home2</span>
									<br />
									<span className='menu__item'>Home3</span>
									<br />
									<span className='menu__item'>Home4</span>
								</div>
							</li>
							<li className='header__topitem'>
								<a href='#' className='header__topitemlink'>
									Posts
								</a>
								<div className='menu'>
									<span className='menu__item second-item'>Home2</span>
									<br />
									<span className='menu__item'>Home3</span>
									<br />
									<span className='menu__item'>Home4</span>
								</div>
							</li>
							<li className='header__topitem'>
								<a href='#' className='header__topitemlink'>
									Bookmark
								</a>
								<div className='menu'>
									<span className='menu__item second-item'>Home2</span>
									<br />
									<span className='menu__item'>Home3</span>
									<br />
									<span className='menu__item'>Home4</span>
								</div>
							</li>
							<li className='header__topitem'>
								<a href='#' className='header__topitemlink'>
									Pages
								</a>
								<div className='menu'>
									<span className='menu__item second-item'>Home2</span>
									<br />
									<span className='menu__item'>Home3</span>
									<br />
									<span className='menu__item'>Home4</span>
								</div>
							</li>
							<li className='header__topitem'>
								<button type='button' className='morebtn'>
									<img
										src='https://cdn-icons-png.flaticon.com/512/512/512222.png'
										alt='more icon'
										className='more-icon'
									/>
								</button>
								<div className='more-about'>
									<h5>salom</h5>
								</div>
							</li>
						</ul>
					</div>
					<div className='header__info'>
						<button className='header__signbtn'>Sign In</button>
						<button className='header__notificationbtn'>
							<img
								src='https://cdn-icons-png.flaticon.com/128/1827/1827392.png'
								alt='notification icon'
								className='header__notificationicon'
							/>
						</button>
						<button className='header__searchbtn'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/622/622669.png'
								alt='search icon'
								className='header__searchicon'
							/>
						</button>
					</div>
				</div>
			</div>
			<div className='header__bottom'>
				<div className='container'>
					<div className='header__bottomcurrent'>
						<div className='header__bottomabout'>
							<div className='header__bottomhotabout'>
								<svg
									class='svg-icon svg-fire'
									aria-hidden='true'
									style={{
										color: 'red',
										width: '20px',
										height: '20px',
										marginRight: '10px',
									}}
									role='img'
									focusable='false'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'>
									<path
										fill='currentColor'
										d='M412.91,157.39c-7.892-8.589-18.469-19.248-30.652-26.211c-0.321-0.191-0.656-0.369-0.998-0.54
 c-6.594-3.3-14.534-2.788-20.656,1.312c-6.58,4.414-15.599,10.461-8.261,108.738c0.014,0.246,0.041,0.485,0.068,0.731
 c0.615,5.582,0.232,8.814-0.198,10.536c-0.068,0.287-0.137,0.574-0.198,0.861c-4.503,22.015-24.004,32.832-39.323,35.401
 c-7.503,1.264-33.071,3.498-47.222-20.396c-8.678-14.957-9.6-32.928-2.555-49.388c1.606-3.232,3.157-6.519,4.721-9.826
 c3.594-7.612,6.99-14.8,11.315-21.708c32.627-53.939,27.359-118.892-14.458-178.208c-3.539-5.029-9.156-8.199-15.285-8.637
 c-6.122-0.458-12.142,1.893-16.365,6.361c-16.235,17.178-32.046,35.21-47.338,52.647c-18.387,20.97-37.41,42.658-57.198,62.828
 c-29.839,31.568-70.864,80.717-82.486,142.971c-7.571,41.667-1.633,85.67,16.672,123.811
 c33.037,69.839,107.085,119.302,184.241,123.087c3.225,0.157,6.437,0.239,9.655,0.239c74.43-0.007,147.241-41.844,183.394-106.21
 C487.552,321.987,476.749,222.22,412.91,157.39z M404.116,385.587c-30.365,54.055-92.872,88.294-155.366,85.233
 c-62.48-3.068-122.438-43.122-149.243-99.78c-14.65-30.516-19.392-65.616-13.365-98.742c7.318-39.221,30.188-78.059,71.69-121.96
 c20.341-20.717,39.74-42.849,58.503-64.243c9.142-10.434,18.476-21.073,27.919-31.547c13.638,27.42,24.96,69.244-0.226,110.884
 c-5.439,8.691-9.518,17.321-13.461,25.664c-1.51,3.211-3.013,6.389-4.578,9.518c-0.157,0.314-0.301,0.629-0.444,0.95
 c-12.367,28.261-10.693,60.724,4.558,86.989c18.305,30.912,52.524,46.272,89.374,40.095c36.891-6.191,65.343-32.552,72.62-67.201
 c1.715-7.134,2.084-15.046,1.107-24.161c-1.121-15.128-1.701-29.962-1.934-42.89C435.246,246.019,440.747,321.324,404.116,385.587
 z'></path>
								</svg>
								<span className='header__bottomhot'>Hot News</span>
							</div>
							<div
								id='carouselExampleInterval'
								class='carousel slide'
								data-bs-ride='carousel'>
								<div class='carousel-inner'>
									<div class='carousel-item active' data-bs-interval='10000'>
										<h5 className='carusel-title'>Technology</h5>
									</div>
									<div class='carousel-item' data-bs-interval='2000'>
										<h5 className='carusel-title'>Business</h5>
									</div>
									<div class='carousel-item'>
										<h5 className='carusel-title'>Politics</h5>
									</div>
								</div>
								<button
									class='carousel-control-next'
									type='button'
									data-bs-target='#carouselExampleInterval'
									data-bs-slide='next'>
									<img
										style={{ width: '30px', height: '10px' }}
										src='https://cdn-icons-png.flaticon.com/512/664/664866.png'
										alt='image carusel'
										class='carousel-control'
										aria-hidden='true'
									/>
									<span class='visually-hidden'>Next</span>
								</button>
							</div>
						</div>
						<ul className='header__bottomlist'>
							<li className='header__bottomitem'>
								<a href='#' className='header__bottomitemlink'>
									Quick Links
								</a>
							</li>
							<li className='header__bottomitem'>
								<a href='#' className='header__bottomitemlink'>
									Technology
								</a>
							</li>
							<li className='header__bottomitem'>
								<a href='#' className='header__bottomitemlink'>
									Business
								</a>
							</li>
							<li className='header__bottomitem'>
								<a href='#' className='header__bottomitemlink'>
									Science
								</a>
							</li>
							<li className='header__bottomitem'>
								<a href='#' className='header__bottomitemlink'>
									Covid 19
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
