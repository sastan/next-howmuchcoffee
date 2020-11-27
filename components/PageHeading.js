
import PropTypes from "prop-types";
import cx from "classnames";
function PageHeading(props) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h1
          className={cx(
            "text-2xl font-bold leading-7 mt-4 text-gray-900 sm:text-3xl sm:leading-9",
            { "text-gray-900 underline": props.underline }
          )}
        >
          {props.title}
        </h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  );
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
export default PageHeading;