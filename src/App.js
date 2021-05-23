import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemText, makeStyles, Paper, Divider} from "@material-ui/core";

const fallbackData = ['name1', 'name2', 'name3', 'name4', 'name5'];

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "1.5rem",
  },
}));

export default function App({data}) {
  const input = data ? data : fallbackData;
  const {container} = useStyles();

  return (
    <div className={container}>
      <Paper elevation={3}>
        <List>
          {input.map((name, index) =>
            (<div key={index}>
              <ListItem>
                <ListItemText primary={name} />
              </ListItem>
              {index !== (input.length - 1) && (<Divider/>)}
            </div>)
          )}
        </List>
      </Paper>
    </div>
  )

}

App.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired
}
