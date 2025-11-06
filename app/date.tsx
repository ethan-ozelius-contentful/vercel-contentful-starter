import { format } from "date-fns";

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <>
      {dateString && (
        <time dateTime={dateString}>
          {format(new Date(dateString), "LLLL	d, yyyy")}
        </time>
      )}
    </>
  )
}
