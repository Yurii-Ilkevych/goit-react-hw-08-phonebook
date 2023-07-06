import { ThreeDots } from 'react-loader-spinner';
import { Delete } from './DeleteBtn.styled';
import PropTypes from 'prop-types';

export const DeleteBtn = ({ id, isLoading, onDelete }) => {
  return (
    <Delete
      type="button"
      disabled={isLoading}
      onClick={() => {
        onDelete(id);
      }}
    >
      {isLoading ? (
        <ThreeDots
          height="15"
          width="40"
          radius="9"
          color="rgb(69, 201, 219)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        'Delete'
      )}
    </Delete>
  );
};

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};
