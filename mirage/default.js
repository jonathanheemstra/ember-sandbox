import util from '../utils/core-utilities';

/**
 * The scenario to use for seeding the mirage database.
 * NOTE: please add a comment block above your scenario contributions.
 *
 * @param  {ember-cli-mirage/Server} server
 * @link http://www.ember-cli-mirage.com/docs/v0.3.x/seeding-your-database/
 */
export default function(server) {

  /**
   * Create generic List with one media item.
   */
  const mediaItem = server.create('media-item');
  const listOne = server.create('list');
  const listOneRow = server.create('list-row', {
    mediaItem: mediaItem,
    list: listOne,
  });

  for (var i = 0; i < 10; i++) {
    server.create('media-item');
  }
}
