import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

const ConversationItem = () => {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAswMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EADgQAAIBAwIEBAMFBwUBAAAAAAECAwAEERIhBRMxQQYiUWEycaEUQoHB0QcjUmKRseEzRHLw8RX/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAkEQACAgIDAAEEAwAAAAAAAAAAAQIRAyEEEjFBEyIyYSMzUf/aAAwDAQACEQMRAD8A4sbbU2phTV5Fgi61WNMEfSs/xjieToUinSdHkxTnItv+JOXKxtQa8QnB3alvO6nO9cc7ekO2WRhGI+jmkmwCaLWEDFL+HuNAJpnzkC5J3FISSdluNqgyFEVRmuppU0YApVLfgdOlDvfa+lQZ8j7aGyaQVcMuDihB1r2JjIM9TVVzK0AJWEufpT+PbJpRcmWN8NAz/FUN3IFBZ9J7riuRfISeZGp99NWx0Y8DfydwEBt6LLDFCR3MbnyRxkehwCKs1K+ynDDqK3TFyxTir9LCwrkEZqok16DitcFQuLbCFUGvWjFcxNkVd2oOoV0ygqKrYVewqsigoIGlGxpPeJ5vxp3LjFK7oZNU4FbE5XQOiDSKldBsDFSjaO7Gv4zf6SURqytxIWYkneipiX1O7bmljuA5BOaxwfovFOC0mWoSasVTXVsoK0SFFA2UFtrIVXAq2W6xtmh413rqRB6Vigpegubj4efaOa4jTd2OAK6edLYhUw792PQH2FCk8jJA88mw9hXgk19Rk96R9KKei3Gm1bCjcTN8THFcc474yfnVa+Y+vt2qRLNc3AtrCCW5nP3Ilz/5R1Q05kZ3bJ2zXAhB+J9IrXcK/ZxxW7Cy8Vvo7FTvyo15kmPn0H1rRW/7OvDsTA3MdzdsD1luGUf0XFc2kcfLmtlYYWcKfnVBiu7VxIkhcD36V9Tv/AvhyQYhsHgPrFcSAj61luNeELzhimbhsxu4R/t5AA4Hse9cpoxoUW10LmEtjDr8Qr3me9Lh/qCVFeMnIZGGMVZzCe9GKaiNbaQEUVzAB1pVZtsd6ueXFFFWTZ6+C2S4670M1x5qBMzPIQPWro4WJB3rJxjFCoSbZc8maHlRjviiRCdQoxbYFOlFx5KzuSqjYiMZyalMngAY7VKeLT0BMzaTS2ViZqYcwtHjG9AvHhwTTJSXUn4+GXbYZby6QBRLS4OKXoMLmrzksPlU3Wz0HoOikq4nWQB3oCNsURq0xPIew2+ZrmqRi+6VFM7CSUsNh2+VVkquc9O9DGXGfWrLG0u+K3KW1qhw7AM+DhR65pP7L/NDnw3wW48RXfKiJhsoz+9mxuf5R719b4Twu34LZrb8NtSgGx04Bf8AmY9zS/hNpacIsIbO0kjVEXcHqx7k/rTCPicKsYpp0DH4CBsfxpLlYxIv13JLfuW1ejTgD6b13BDNyisohUkdEyR/U0uW9UNNKWBVNP47H/FWS8RtBhZZnG2AFJ/KhtBtaLJ4wpVUKjSexpddyKMb5YelWTS2mgvEsUgPXXIxP49v60LPcRCMLyiuO/XFd6L7Izviaxie2+1QpHqG7krnIrDSbNgDHsK3XFZDHbklcxY83yJrMScOkeFrq3jeS2X4pANlp+PymSZU+2gWzOAc1bKwxVKnQTVU0ux3o46EyjZxbYM5HvTiALpFJLQ5kLU0SXSopOa26CgkgxwgNXq4EfXtSh7nzgZ70WrllOPSqOPCifkyuJRLIOY1Sh5Adbbd6lUUJT0URAFM0NOMuKttidHWuJR5xQTH4F9x2iZSrinT5VIR5N6uddx8qFMozRrYN0ar7gM1kwTqMGqWGHou384KnoRiufgmDqVmfmcrkHrWs/Zwi8y+uJFYgIANwM1kb1XiuJInzlCRX0vwVYxp4btZIxqa6jJ6bE6jkVPN1EvW2kFySXcgwkZC+zbGkVzxVYWaPmpI4bcKCcH0z69O9aF/D17eDl38jRWw+FIfv/8ALHQe1G2PhO0ZxHGqxwJ1EY/M9/ak2vkojFrwp8GQvxW0u3mZkQuAu3sM/lWY8TQ3thxeSC2LSQ6cxlhkfKvofCPs8KabGI8rTkLgjHrml8vIbiJW5XIkH3hsO3XtWKrCaZhvtd7GAtzbSzRYGTDNjHT7vT+1GRXsYKCO6lCH7kinUv4GtZLwFYZ2EaxlCMq2og/pQ0nDraHGQus/eXIx9aPsgJQZzbpb3SCFysizRkEg96Q3KPZRGLUQiBgyjpjFObJMX6oCMpnp3pB4tu1t4pFHxSvpz396KC7aEuSjJv8ARmLmZVGx3oIyFj1oe5lLE4qQkmqXEkTGlkvmpi0OQKX2B3xTqFdSio8zpjIKxTcQ6HB96OtXBG/pXnEI8Cg4pCrYq3ivsiHleBTldR+dSg2lOo1KbQpNUA28uExmumbLDeqFAFeqcuoHrS5FmJVIZQ/BRegnB9qHtl8oo9V2FKbodO5C+RfOaItRivZI8tXiArtTE00TvHO/Cu/tI7tseVXxsx71s/AyzReGZIJh5rGclcd1bf8AM1ipJtNwu9bHwTcM1xcW+fLLEdvfH/tTyi2mUqbi1ZpVuzORETlTv+FdXV5InJsbLytNsWA+Fe5/73oaCEJLq06WGVxmmvArDVcSX0uCj+RM+nf8v6VNHZ6PeKWxFB4miE08awyWughIy4wrgeh/KlV14guZeJCGytueGGmYjfHsPX3rb8YSyvNSTrGyE6RqA8pzj9aTQtYcMGVjRQPMvvgnFb2SF/Ub8OrOWWCCDn6jHIgwWySh7r8vSqr8oVbAwQNsU6teJ2F/GqPoEoAzjow3+vWkvGYxA5SI5jKkhv4SNiK31GrJehZZZS/LE79896yHj2XmcYMUYwka/U1rRNyphI+wI1HA9v8ANZHxCRdXUtxjGrAH4VThWiDO6kzLFSetXRjAqNVsMRcZp7QlMJtGwac20mQKTwwEHamVsCMVDyIsohJdS6+3WgUjOqj7kZUVzDHk1Vw3SIOTsVyKQ5FSjZYxzG+dSrLJ0IM7V1AQZF+deR28jdFNFQWUupSQetStnpQpMYQnSmaK1+UVVHbnTjG9Fi3zp27UqTPQxODWwYkk5ANTBI6GmEdrt0qw2nl6UCkNl9OjNXCH7UlaLw9fPw66Scb4GGB7igbi0JmBAqJqRsEU+FPR5fIkltH0SBxcsrRknmHr3Oa9454jFisdjYxmSVjpVV6gDbf6VnfDvGeVMlvLgOu8eR1HpTO0hZ7h75dLTSZ0Btgq/wCajlF45NMrxSWaKaF8nDL6UiW7vVs9R2jjzI30xXn/AMux0HmcSuHI+8sajP8AenSWEUkuZ5NT9cR7fWvZLThsa45RONz52OPrWJ/4P6mXn4bNEvNsLy5GBkF8H6YppDdSS8MVpZMzoSGHcf8AcUc09mFB5WV1Y3P1pVcTLLL+6yM51frXWA4JFXELqOztNc7YB0oD7mlPEoleLUu4YZBrvxZE03CmkHWJw5HsNvzq21s2fwuvXmxpzPwParMGo0efyatMxen94QfWmdtENHSgC4afPrRscxUYFNBfgUEC1fDjIoBpmJqyO4x1pORJnRsaSAMoqRAZodZsrvV8LAnaiwqibOUyLlzUrtx5jUp9i6L4eHKPu0Ulgv8ADTJVUVYoFeXLLI9JJC9LL2qw22GG1MBioy5pTnJhAqRADpXWhcYxVzLgVI4JpjiKNm/CtjbMcwFrUF84occPeeYJEhLNsBWoteEO+GncLnsOtFvbQcPjCwjMr7FjVMO0dsTNqSoWWfhy1hjJdTJcKCdYOMH0FKrqa6sZ9MeeXnIye1bKOPlw6TuW6mkHEE+3QyCNQbm2Yhk/iHqKCcm3sp4ySTSFjcUlBGQwPsM5+tcT3k82k6CP+TbfShUkzJ8OnHZu9CsS8jOx6nasplSCtcwyCVUE7Y613Coj3yWOe5oZHkB0aS0p6ew9flUd1IKK2Vxu3r7D2/vWP7ds5kvJeZavGd+Z5APUE9ad8OCgLFpypXTjHakMbC6voreJCzr5jjf2FbfhtitrB5xmZ18xPb2qnBLrBuXyeVzG5ZFFfB858TcBaylN5aKWtycso+4f0pTAdVfZobO2aMhoQwb4g2+axnGvA8iXLzcGKmNtzAxwQfY07smwYt1szKR6q8eEg0XyJbdzHcRtG46hhiu9AOK3p2BeTqDspVB8qvtc6hmrDGCuK7hj0nNGo9UIll7Hjjzn515XkmdZqVgVGgVqsVqlSvLLyxTVqAuwVRualSspWcMo7WG3AMw5jntjaihMwA0qqr2FSpVnVRVImcm3sut2Y5djnFUXh1zw5/iqVKGXhyCmO1ILvy8WZApUOnM5itgqRtt9KlSpOWv42y3h/wBos4haIJUYuFklY6DjZiBnfHQ0oWWCIuszaWVvNgE4rypWcfJKWNNno5Uk9HI1OGkclVc5Cg9R2zVcx5q4XYCpUrruVsS/DQeCLCOGCe+IzJK+hT6KP81p2fFeVKqg9Hl5vyZW15yl6ZqRO5XUx671KlO+CdPZzcpb3kei6hWUfzDekHEPC+cy8Nk7/wClJ+RqVK2EmjJJNCEq8TmOVcOpwRmoTvUqVY/xI0vvKmPmNSpUpBaf/9k="
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default ConversationItem;
