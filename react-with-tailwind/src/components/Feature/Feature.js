import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div>
              <div className='flex items-center'>
                <CheckCircleIcon className='w-6 h-6 text-green-500'/>
                <p className='ml-2 my-2'>{feature}</p>
            </div>  
        </div>
    );
};

export default Feature;