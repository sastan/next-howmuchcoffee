import dayjs from 'dayjs'
const isToday = require('dayjs/plugin/isToday')
import { tw } from 'twind'
dayjs.extend(isToday)
export default function CoffeeList(props) {
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <ul className={tw`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
        {props.data &&
          props.data.map((node) => (
            <li
              key={node._id}
              className={tw`col-span-1 bg-white rounded-lg divide-y divide-gray-200 shadow-2xl duration-75 dark:bg-gray-700 hover:ring-2 hover:ring-red-custom`}
            >
              <div
                className={tw`flex justify-between items-center p-6 space-x-6 w-full`}
              >
                <div className={tw`flex-1 truncate`}>
                  <div className={tw`flex items-center space-x-3`}>
                    <h3
                      className={tw`text-sm font-semibold text-gray-900 dark:text-gray-300 truncate`}
                    >
                      {node.amount} Liter
                    </h3>
                    {node.extras && (
                      <span
                        className={tw`flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full`}
                      >
                        {node.extras}
                      </span>
                    )}
                  </div>
                  <p
                    className={tw`mt-1 text-sm font-medium text-gray-600 dark:text-yellow-custom truncate`}
                  >
                    {node.notes}
                  </p>
                  <p className={tw`mt-1 text-xs text-gray-400`}>
                    {dayjs(node._ts).isToday()
                      ? dayjs(node._ts / 1000).format('h:mm:s')
                      : dayjs(node._ts / 1000).format('DD.MM.YYYY')}
                  </p>
                </div>
                {/* <img
                  className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                /> */}
              </div>
            </li>
          ))}{' '}
      </ul>
    </div>
  )
}
