<?php
/**
 * Build two classes: Event and EventFeed.
 *
 * - EventFeed represents a data feed of event information
 *
 * - Event represents an individual event
 *
 * - EventFeed takes the path of an XML feed as its constructor;
 *   use the supplied events.xml file
 *
 * - the EventFeed class should implement a get_events() function that
 *   optionally takes a string argument specifying a date.  If the 
 *   date string is provided, only events for that date are returned.
 *   If no date is provided, all events are returned.
 *
 * - get_events() returns the dates in forward chronological order
 *
 * - simple test cases are provided, but you should be sure to handle
 *   all error conditions
 */


// simple test case 1:

date_default_timezone_set ('America/New_York');

$feed = new EventFeed ("./events.xml");
$events = $feed->get_events ();
foreach ($events as $evt)
{
    print date ('m/d/Y h:i a', $evt->get_time ()) . "  " . $evt->get_title () . "\n";
}

function get_events()  {
        if (isset($this->get)) {
        foreach ( $this->get as $eventName => $eventHandler ) {
            $$eventHandler=& new $eventHandler;
            $$eventHandler->respond();
        }
        } else {
            // Do default handler if no events
            $defaultHandler=& new DefaultHandler;
        }
    }

/*
Should result in the following output:

01/07/2016 07:00 pm  Carolina's Funniest Comic
01/09/2016 08:30 pm  The Great Cover Up
01/11/2016 08:00 pm  The Atomic Rhythm All-Stars
02/06/2016 02:00 am  Krispy Kreme Challenge

*/

// simple test case 2:

$events = $feed->get_events ('2016-01-11');
foreach ($events as $evt)
{
    print date ('m/d/Y h:i a', $evt->get_time ()) . "  " . $evt->get_title () . "\n";
}

/*
Should result in the following output:

01/11/2016 08:00 pm  The Atomic Rhythm All-Stars

*/
