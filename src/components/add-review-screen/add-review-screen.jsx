import React from "react";

const AddReviewScreen = () => {
  return (
    <section class="movie-card movie-card--full">
      <div class="movie-card__hero">
        <div class="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 class="visually-hidden">WTW</h1>

        <header class="page-header movie-card__head">
          <div class="logo">
            <a href="main.html" class="logo__link">
              <span class="logo__letter logo__letter--1">W</span>
              <span class="logo__letter logo__letter--2">T</span>
              <span class="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div class="user-block">
            <div class="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div class="movie-card__wrap">
          <div class="movie-card__desc">
            <h2 class="movie-card__title">The Grand Budapest Hotel</h2>
            <p class="movie-card__meta">
              <span class="movie-card__genre">Drama</span>
              <span class="movie-card__year">2014</span>
            </p>

            <div class="movie-card__buttons">
              <button class="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button class="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" class="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div class="movie-card__wrap movie-card__translate-top">
        <div class="movie-card__info">
          <div class="movie-card__poster movie-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div class="movie-card__desc">
            <nav class="movie-nav movie-card__nav">
              <ul class="movie-nav__list">
                <li class="movie-nav__item">
                  <a href="#" class="movie-nav__link">Overview</a>
                </li>
                <li class="movie-nav__item">
                  <a href="#" class="movie-nav__link">Details</a>
                </li>
                <li class="movie-nav__item movie-nav__item--active">
                  <a href="#" class="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div class="movie-card__reviews movie-card__row">
              <div class="movie-card__reviews-col">
                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.</p>

                    <footer class="review__details">
                      <cite class="review__author">Kate Muir</cite>
                      <time class="review__date" datetime="2016-12-24">December 24, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">8,9</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                    <footer class="review__details">
                      <cite class="review__author">Bill Goodykoontz</cite>
                      <time class="review__date" datetime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">8,0</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.</p>

                    <footer class="review__details">
                      <cite class="review__author">Amanda Greever</cite>
                      <time class="review__date" datetime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">8,0</div>
                </div>
              </div>
              <div class="movie-card__reviews-col">
                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                    <footer class="review__details">
                      <cite class="review__author">Matthew Lickona</cite>
                      <time class="review__date" datetime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">7,2</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer class="review__details">
                      <cite class="review__author">Paula Fleri-Soler</cite>
                      <time class="review__date" datetime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">7,6</div>
                </div>

                <div class="review">
                  <blockquote class="review__quote">
                    <p class="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer class="review__details">
                      <cite class="review__author">Paula Fleri-Soler</cite>
                      <time class="review__date" datetime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div class="review__rating">7,0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReviewScreen;
