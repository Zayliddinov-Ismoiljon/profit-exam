import React from 'react';

import './Main.css';

export default function Main() {
	return (
		<main className='main'>
			<div className="fixed">
				<a href="#" className="fixed-link">
					<img src="https://cdn-icons-png.flaticon.com/512/6072/6072999.png" alt="fixed image" className="fixed-img" />
					<span className='fixed-span'>Demos</span>
				</a>
				<a href="#" className="fixed-buylink">
					<img src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png" alt="image" className="fixed-buyimg" />
					<span className="fixed-buyspan">Buy Now</span>
				</a>
			</div>
			<div className='container'>
				<div className='main__current'>
					<div
						id='carouselExampleIndicators'
						class='carousel slide'
						data-bs-ride='carousel'>
						<div class='carousel-indicators'>
							<button
								type='button'
								data-bs-target='#carouselExampleIndicators'
								data-bs-slide-to='0'
								class='active'
								aria-current='true'
								aria-label='Slide 1'></button>
							<button
								type='button'
								data-bs-target='#carouselExampleIndicators'
								data-bs-slide-to='1'
								aria-label='Slide 2'></button>
							<button
								type='button'
								data-bs-target='#carouselExampleIndicators'
								data-bs-slide-to='2'
								aria-label='Slide 3'></button>
						</div>
						<div class='carousel-inner'>
							<div class='carousel-item active'>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/t54-1-860x573.jpg'
									class='d-block w-100'
									alt='image'
								/>
								<div className='carusel-info'>
									<a href='#' className='carusel-link'>
										ENTERTAIMENT
									</a>
									<h3 className='carusel__title'>
										Kuo’s Favorite Levi’s Denim Shorts Are 40% Off on Amazon
									</h3>
									<p className='carusel-text'>
										Music expresses feeling and thought, without language. It
										was below and before speech, and it is above and beyond all
										words.
									</p>
									<div className='carusel-about'>
										<img
											src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg'
											alt='image'
											className='carusel-aboutimg'
										/>
										<span className='carusel-aboutspan'>Taylor Emma</span>
										<time className='carusel-abouttime'>Oct1 | 2021</time>
									</div>
								</div>
							</div>
							<div class='carousel-item'>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/e30-860x573.jpg'
									class='d-block w-100'
									alt='image'
								/>
								<div className='carusel-info'>
									<a href='#' className='carusel-link'>
										ENTERTAIMENT
									</a>
									<h3 className='carusel__title'>
										Kuo’s Favorite Levi’s Denim Shorts Are 40% Off on Amazon
									</h3>
									<p className='carusel-text'>
										Music expresses feeling and thought, without language. It
										was below and before speech, and it is above and beyond all
										words.
									</p>
									<div className='carusel-about'>
										<img
											src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg'
											alt='image'
											className='carusel-aboutimg'
										/>
										<span className='carusel-aboutspan'>Taylor Emma</span>
										<time className='carusel-abouttime'>Oct1 | 2021</time>
									</div>
								</div>
							</div>
						</div>
						<button
							style={{ height: '20px', width: '20px' }}
							class='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide='prev'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/686/686751.png'
								alt='image'
								class='carousel-control'
								aria-hidden='true'
								className='prev-img'
							/>
							<span class='visually-hidden'>Previous</span>
						</button>
						<button
							style={{ height: '20px', width: '20px' }}
							class='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide='next'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/594/594846.png'
								alt='image'
								style={{
									position: 'absolute',
									top: '10px',
									width: '20px',
									height: '20px',
									right: '75px',
								}}
								class='carousel-control-next-icon'
								aria-hidden='true'
							/>
							<span class='visually-hidden'>Next</span>
						</button>
					</div>
					<div className='main__currentinfo'>
						<div className='main__currentabout'>
							<a href='#' className='main__currentaboutlink'>
								BUSINESS
							</a>
							<h3 className='main__currentabouttitle'>
								The impact of COVID-19 on The Airport Business
							</h3>
							<div className='main__currentinner'>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg'
									alt='image'
									className='main__currentinnerimg'
								/>
								<span className='main__currentinnerspan'>Taylor Emmas</span>
								<time className='main__currentinnertime'>Sep 19 || 2022</time>
							</div>
						</div>
						<div className='main__currentabout'>
							<a href='#' className='main__currentaboutlink'>
								POLITICS
							</a>
							<h3 className='main__currentabouttitle'>
								Bad Credit Shouldn’t Affect Health Insurance, Experts Say
							</h3>
							<div className='main__currentinner'>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg'
									alt='image'
									className='main__currentinnerimg'
								/>
								<span className='main__currentinnerspan'>Taylor Emmas</span>
								<time className='main__currentinnertime'>Sep 19 || 2022</time>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className='technology'>
				<div className='container'>
					<div className='technology__inner'>
						<div className='technology__innerapple'>
							<a href='#' className='carusel-link'>
								TECHNOLOGY
							</a>
							<h4 className='technology__innertitle'>
								Apple Watch Series 9 Reportedly Has Flat Sides and Bigger
								Screens
							</h4>
							<img
								src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg'
								alt='image'
								className='technology__innerimg'
							/>
							<span className='technology__innerspan'>Jacob</span>
							<time className='technology__innertime'>Sep19|2022</time>
						</div>
						<div className='technology__rewiew'>
							<img
								src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t12-330x220.jpg'
								alt='image'
								className='technology__rewiewimg'
							/>
							<div className='technology__rewiewabout'>
								<a href='#' className='carusel-link'>
									TRAVEL
								</a>
								<h4 className='technology__rewiewtitle'>
									REVIEW: San Diego City Beat’s a Night at The Besties
								</h4>
								<div className='technology__rewiewspanabout'>
									<span className='technology__rewiewspanred'></span>
									<span className='technology__rewiewspangreen'></span>
									<span className='technology__rewiewspanyellow'></span>
									<span className='technology__rewiewspan'></span>
									<span className='technology__rewiewspangood'>Good place</span>
								</div>
							</div>
						</div>
						<img
							src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/v4-330x220.jpg'
							alt='image'
							className='technology__pic'
						/>
					</div>
				</div>
			</section>

			<section className='watch'>
				<div className='container'>
					<div className='watch__inner'>
						<div className='main__currentabout travel'>
							<a href='#' className='main__currentaboutlink'>
								TRAVEL
							</a>
							<h3 className='main__currentabouttitle'>
								10 Places You Can’t Miss If It’s Your First Time in European
							</h3>
							<p className='carusel-text'>
								And then there is the most dangerous risk of all, the risk of
								spending your life not doing what you want on the bet you can
								buy yourself the freedom to do it later.
							</p>
							<div className='main__currentinner'>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg'
									alt='image'
									className='main__currentinnerimg'
								/>
								<span className='main__currentinnerspan travel-after'>
									Taylor Emmas
								</span>
								<time className='main__currentinnertime'>Sep 19 || 2022</time>
							</div>
						</div>
						<ul className='main__currentlist'>
							<li className='main__currentitem'>
								<div className='main__currentitemabout'>
									<h4 className='main__currentitemtitle'>
										Explained: What are Smart Glasses and How Do It Work?
									</h4>
									<span className='main__currentitemspan'>Aug 21, 2021</span>
								</div>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t33-200x135.jpg'
									alt='image'
									className='main__currentitemimg'
								/>
							</li>
							<li className='main__currentitem'>
								<div className='main__currentitemabout'>
									<h4 className='main__currentitemtitle'>
										8 Mistakes That Will RUIN Your Weekend Trips Plan
									</h4>
									<span className='main__currentitemspan'>Aug 21, 2021</span>
								</div>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/v14-200x135.jpg'
									alt='image'
									className='main__currentitemimg'
								/>
							</li>
							<li className='main__currentitem'>
								<div className='main__currentitemabout'>
									<h4 className='main__currentitemtitle'>
										16 Top of Our Favorite Outdoor Clothing Brands
									</h4>
									<span className='main__currentitemspan'>Aug 21, 2021</span>
								</div>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/f2-200x135.jpg'
									alt='image'
									className='main__currentitemimg'
								/>
							</li>
							<li className='main__currentitem'>
								<div className='main__currentitemabout'>
									<h4 className='main__currentitemtitle'>
										Garmin Venu Review: Solid Fitness Tracker with Smartwatch
										Finesse
									</h4>
									<span className='main__currentitemspan'>Aug 21, 2021</span>
								</div>
								<img
									src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t26-200x135.jpg'
									alt='image'
									className='main__currentitemimg'
								/>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className='follow'>
				<div className='container'>
					<div className='follow__inner'>
						<h3 className='follow__innertitle'>Follow Writers</h3>
						<ul className='follow__innerlist'>
							<li className='follow__inneritem'>
								<div className='follow__inneritemabout'>
									<h4 className='follow__inneritemtitle'>Taylor Emma</h4>
									<span className='follow__inneritemspan'>106 Articles</span>
									<p className='follow__inneritemtext'>
										A senior editor for The Mars that left the company to join
										the team of Foxiz as a news editor and content creator. An
										artist…
									</p>
								</div>
								<div className='follow__inneriteminfo'>
									<img
										src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm.jpg'
										alt='image'
										className='follow__inneritemimg'
									/>
									<span className='follow__infospan'>Senior Editor</span>
								</div>
							</li>
							<li className='follow__inneritem'>
								<div className='follow__inneritemabout'>
									<h4 className='follow__inneritemtitle'>Jacob</h4>
									<span className='follow__inneritemspan'>106 Articles</span>
									<p className='follow__inneritemtext'>
									Inspiring the world through Personal Development and Entrepreneurship. Experimenter in life, productivity, and creativity. Work in Foxiz.
									</p>
								</div>
								<div className='follow__inneriteminfo'>
									<img
										src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2.jpg'
										alt='image'
										className='follow__inneritemimg'
									/>
									<span className='follow__infospan'>Foxiz Contributor</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="blog">
				<div className="container">
					<div className="blog__inner">
						<h3 className="blog__innertitle">From The Blog</h3>
						<ul className="blog__innerlist">
							<li className="blog__inneritem">
								<div className="blog__inneritemabout">
									<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/e12-330x220.jpg" alt="image" className="blog__inneritemimg" />
									<a href="#" className="blog__inneritemlink">ENTERTAINMENT</a>
									</div>
									<div className="blog__inneriteminfo">
										<h3 className="blog__inneriteminfotitle">How Jennifer Aniston ‘Struggles With Depression’ Inspired New Album</h3>
										<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg" alt="image" className="blog__inneriteminfoimg" />
										<span className="blog__inneriteminfospan">Taylor</span>
										<time className="blog__inneriteminfotime">| Sep 1, 2021</time>
									</div>
							</li>
							<li className="blog__inneritem">
								<div className="blog__inneritemabout">
									<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/c9-330x220.jpg" alt="image" className="blog__inneritemimg" />
									<a href="#" className="blog__inneritemlink">SCIENCE</a>
									</div>
									<div className="blog__inneriteminfo">
										<h3 className="blog__inneriteminfotitle">NASA Sets Coverage for Two Spacewalks Outside Space Station</h3>
										<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg" alt="image" className="blog__inneriteminfoimg" />
										<span className="blog__inneriteminfospan">Jacob</span>
										<time className="blog__inneriteminfotime">| Sep 1, 2021</time>
									</div>
							</li>
							<li className="blog__inneritem">
								<div className="blog__inneritemabout">
									<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/v8-330x220.jpg" alt="image" className="blog__inneritemimg" />
									<a href="#" className="blog__inneritemlink">TRAVEL</a>
									</div>
									<div className="blog__inneriteminfo">
										<h3 className="blog__inneriteminfotitle">7 Things You Realize When You Travel Far Away From Your City</h3>
										<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/av2-60x60.jpg" alt="image" className="blog__inneriteminfoimg" />
										<span className="blog__inneriteminfospan">Jacob</span>
										<time className="blog__inneriteminfotime">| Sep 1, 2021</time>
									</div>
							</li>
							<li className="blog__inneritem">
								<div className="blog__inneritemabout">
									<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t35-330x220.jpg" alt="image" className="blog__inneritemimg" />
									<a href="#" className="blog__inneritemlink">TECHNOLOGY</a>
									</div>
									<div className="blog__inneriteminfo">
										<h3 className="blog__inneriteminfotitle">Global Chip shortage to Hurt Computer Firms During Festive Season</h3>
										<img src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-60x60.jpg" alt="image" className="blog__inneriteminfoimg" />
										<span className="blog__inneriteminfospan">Taylor</span>
										<time className="blog__inneriteminfotime">| Sep 1, 2021</time>
									</div>
							</li>
						</ul>
						<button className='header__signbtn morebtn'>Show More</button>
					</div>
				</div>
			</section>
		</main>
	);
}
